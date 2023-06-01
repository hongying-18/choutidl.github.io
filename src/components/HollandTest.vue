<template>
  <div>
    <div class="holland-test">
      <h1>霍兰德职业兴趣测试</h1>
      <div v-if="!showResults">
        <div>
          <label for="question_count">选择题目数量：</label>
          <select
            id="question_count"
            v-model="questionCount"
            @change="selectQuestionCount"
          >
            <option value="6">6题</option>
            <option value="18">18题</option>
            <option value="30">30题</option>
            <option value="60">60题</option>
            <option value="90">90题</option>
          </select>
        </div>
        <div
          v-for="(question, index) in selectedQuestions"
          :key="index"
          class="question"
        >
          <p>{{ index + 1 }}. {{ question.title }}</p>
          <div>
            <input
              type="radio"
              :id="`yes_${index}`"
              :name="`answer_${index}`"
              @change="selectAnswer(index, 'yes')"
            />
            <label :for="`yes_${index}`">正确</label>
          </div>
          <div>
            <input
              type="radio"
              :id="`no_${index}`"
              :name="`answer_${index}`"
              @change="selectAnswer(index, 'no')"
            />
            <label :for="`no_${index}`">错误</label>
          </div>
          <div>
            <input
              type="radio"
              :id="`Unsure_${index}`"
              :name="`answer_${index}`"
              @change="selectAnswer(index, 'Unsure')"
            />
            <label :for="`Unsure_${index}`">不确定</label>
          </div>
        </div>
        <button @click="submitTest" :disabled="!isAnswered">提交测试</button>
        <p v-if="!isAnswered" class="text-danger">请回答所有题目</p>
      </div>
      <div v-if="showResults" class="results">
        <h2>测试结果</h2>
        <p>职业兴趣类型：{{ result.type.name }}</p>
        <p>类型描述：{{ result.type.description }}</p>
      </div>
    </div>
    <div class="foot"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questionCount: 30,
      allQuestions: [
        // 添加所有90个问题，格式：{ title: '问题标题', correctAnswer: '正确答案', userAnswer: '', category: '职业类型' }
        {
          title: "强壮而敏捷的身体对我很重要。",
          userAnswer: "",
          category: "R",
        },
        {
          title: "我必须彻底地了解事情的真相。",
          userAnswer: "",
          category: "I",
        },
        {
          title: "我的心情受音乐、色彩和美丽事物的影响极大。",
          userAnswer: "",
          category: "A",
        },
        {
          title: "和他人的关系丰富了我的生命并使它有意义。",
          userAnswer: "",
          category: "S",
        },
        {
          title: "我自信会成功。",
          userAnswer: "",
          category: "E",
        },
        {
          title: "我做事必须有清楚的指引。",
          userAnswer: "",
          category: "C",
        },
        {
          title: "我擅长于自己制作、修理东西。",
          userAnswer: "",
          category: "R",
        },
        {
          title: "我可以花很长的时间去想通事情的道理。",
          userAnswer: "",
          category: "I",
        },
        {
          title: "我重视美丽的环境。",
          userAnswer: "",
          category: "A",
        },
        {
          title: "我愿意花时间帮别人解决个人危机。",
          userAnswer: "",
          category: "S",
        },
        {
          title: "我喜欢竞争。",
          userAnswer: "",
          category: "E",
        },
        {
          title: "我在开始一个计划前会花很多时间去计划。",
          userAnswer: "",
          category: "C",
        },
        {
          title: "我喜欢使用双手做事。",
          userAnswer: "",
          category: "R",
        },
        {
          title: "探索新构思使我满意。",
          userAnswer: "",
          category: "I",
        },
        {
          title: "我是寻求新方法来发挥我的创造力。",
          userAnswer: "",
          category: "A",
        },
        {
          title: "我认为能把自己的焦虑和别人分担是很重要的。",
          userAnswer: "",
          category: "S",
        },
        {
          title: "成为群体中的关键任务执行者，对我很重要。",
          userAnswer: "",
          category: "E",
        },
        {
          title: "我对于自己能重视工作中的所有细节感到骄傲。",
          userAnswer: "",
          category: "C",
        },
        {
          title: "我不在乎工作把手弄脏。",
          userAnswer: "",
          category: "R",
        },
        {
          title: "我认为教育是个发展及磨练脑力的终身学习过程。",
          userAnswer: "",
          category: "I",
        },
        {
          title: "我喜欢非正式的穿着，尝试新颜色和款式。",
          userAnswer: "",
          category: "A",
        },
        {
          title: "我常能体会到某人想要和他人沟通的需要。",
          userAnswer: "",
          category: "S",
        },
        {
          title: "我喜欢帮助别人不断改进。",
          userAnswer: "",
          category: "E",
        },
        {
          title: "我在决策时，通常不愿冒险。",
          userAnswer: "",
          category: "C",
        },
        {
          title: "我喜欢购买小零件，做成成品。",
          userAnswer: "",
          category: "R",
        },
        {
          title: "有时我长时间阅读，玩拼图游戏，冥想生命本质。",
          userAnswer: "",
          category: "I",
        },
        {
          title: "我有很强的想象力。",
          userAnswer: "",
          category: "A",
        },
        {
          title: "我喜欢帮助别人发挥天赋和才能。",
          userAnswer: "",
          category: "S",
        },
        {
          title: "我喜欢监督事情直至完工。",
          userAnswer: "",
          category: "E",
        },
        {
          title: "如果我面对一个新情景，会在事前做充分的准备。",
          userAnswer: "",
          category: "C",
        },
        {
          title: "我喜欢独立完成一项任务。",
          userAnswer: "",
          category: "R",
        },
        {
          title: "我渴望阅读或思考任何可以引发我好奇心的东西。",
          userAnswer: "",
          category: "I",
        },
        {
          title: "我喜欢尝试创新的概念。",
          userAnswer: "",
          category: "A",
        },
        {
          title: "如果我和别人摩擦，我会不断尝试化干戈为玉帛。",
          userAnswer: "",
          category: "S",
        },
        {
          title: "要成功就必须定高目标。",
          userAnswer: "",
          category: "E",
        },
        {
          title: "我喜欢为重大决策负责。",
          userAnswer: "",
          category: "C",
        },
        {
          title: "我喜欢直言不讳，不喜欢转弯抹角。",
          userAnswer: "",
          category: "R",
        },
        {
          title: "我在解决问题前，必须把问题进行彻底分析。",
          userAnswer: "",
          category: "I",
        },
        {
          title: "我喜欢重新布置我的环境，使他们与众不同。",
          userAnswer: "",
          category: "A",
        },
        {
          title: "我经常借着和别人交谈来解决自己的问题。",
          userAnswer: "",
          category: "S",
        },
        {
          title: "我常想起草一个计划，而由别人完成细节。",
          userAnswer: "",
          category: "E",
        },
        {
          title: "准时对我来说非常重要。",
          userAnswer: "",
          category: "C",
        },
        {
          title: "从事户外活动令我神清气爽。",
          userAnswer: "",
          category: "R",
        },
        {
          title: "我不断地问：为什么？",
          userAnswer: "",
          category: "I",
        },
        {
          title: "我喜欢自己的工作能够抒发我的情绪和感觉。",
          userAnswer: "",
          category: "A",
        },
        {
          title: "我喜欢帮助别人找可以和他人相互关注的办法。",
          userAnswer: "",
          category: "S",
        },
        {
          title: "能够参与重大决策是件令人兴奋的事情。",
          userAnswer: "",
          category: "E",
        },
        {
          title: "我经常保持清洁 , 喜欢有条不紊。",
          userAnswer: "",
          category: "C",
        },
        {
          title: "我喜欢周边环境简单而实际。",
          userAnswer: "",
          category: "R",
        },
        {
          title: "我会不断地思索一个问题，直到找出答案为止。",
          userAnswer: "",
          category: "I",
        },
        {
          title: "大自然的美深深地触动我的灵魂。",
          userAnswer: "",
          category: "A",
        },
        {
          title: "亲密的人际关系对我很重要。",
          userAnswer: "",
          category: "S",
        },
        {
          title: "升迁和进步对我极重要。",
          userAnswer: "",
          category: "E",
        },
        {
          title: "当我把每日工作计划好时，我会较有安全感。",
          userAnswer: "",
          category: "C",
        },
        {
          title: "我不害怕过重工作负荷，且知道工作的重点。",
          userAnswer: "",
          category: "R",
        },
        {
          title: "我喜欢能使我思考、给我新观念的书。",
          userAnswer: "",
          category: "I",
        },
        {
          title: "我希望能看到艺术表演、戏剧及好的电影。",
          userAnswer: "",
          category: "A",
        },
        {
          title: "我对别人的情绪低潮相当的敏感。",
          userAnswer: "",
          category: "S",
        },
        {
          title: "能影响别人使我感到兴奋。",
          userAnswer: "",
          category: "E",
        },
        {
          title: "当我答应一件事时，我会竭尽监督所有细节。",
          userAnswer: "",
          category: "C",
        },
        {
          title: "我希望粗重的肢体工作不会伤害任何人。",
          userAnswer: "",
          category: "R",
        },
        {
          title: "我希望能学习所有使我感兴趣的科目。",
          userAnswer: "",
          category: "I",
        },
        {
          title: "我希望能做些与众不同的事。",
          userAnswer: "",
          category: "A",
        },
        {
          title: "我对别人的困难乐于伸出援手。",
          userAnswer: "",
          category: "S",
        },
        {
          title: "我愿意冒一点险以求进步。",
          userAnswer: "",
          category: "E",
        },
        {
          title: "当我遵循成规时，我感到安全。",
          userAnswer: "",
          category: "C",
        },
        {
          title: "我选车时，最先注意的是好的引擎。",
          userAnswer: "",
          category: "R",
        },
        {
          title: "我喜欢能刺激我思考的话。",
          userAnswer: "",
          category: "I",
        },
        {
          title: "当我从事创造性的事时，我会忘掉一切旧经验。",
          userAnswer: "",
          category: "A",
        },
        {
          title: "我对社会上有许多人需要帮助感到关注。",
          userAnswer: "",
          category: "S",
        },
        {
          title: "说服别人依计划行事是件有趣的事情。",
          userAnswer: "",
          category: "E",
        },
        {
          title: "我擅长于检查细节。",
          userAnswer: "",
          category: "C",
        },
        {
          title: "我通常知道如何应付紧急事件。",
          userAnswer: "",
          category: "R",
        },
        {
          title: "阅读新发现的书事件令人兴奋的事情。",
          userAnswer: "",
          category: "I",
        },
        {
          title: "我喜欢美丽、不平凡的东西。",
          userAnswer: "",
          category: "A",
        },
        {
          title: "我经常关心孤独、不友善的人。",
          userAnswer: "",
          category: "S",
        },
        {
          title: "我喜欢讨价还价。",
          userAnswer: "",
          category: "E",
        },
        {
          title: "我花钱时小心翼翼。",
          userAnswer: "",
          category: "C",
        },
        {
          title: "我用运动来保持强壮的身体。",
          userAnswer: "",
          category: "R",
        },
        {
          title: "我经常对大自然的奥秘感到好奇。",
          userAnswer: "",
          category: "I",
        },
        {
          title: "尝试不平凡的新事物是件相当有趣的事情。",
          userAnswer: "",
          category: "A",
        },
        {
          title: "当别人像我诉说他的困难时，我是个好听众。",
          userAnswer: "",
          category: "S",
        },
        {
          title: "做事失败了，我会再接再厉。",
          userAnswer: "",
          category: "E",
        },
        {
          title: "我需要确切地知道别人对我的要求是什么。",
          userAnswer: "",
          category: "C",
        },
        {
          title: "我喜欢把东西拆开，看看能否修理他们。",
          userAnswer: "",
          category: "R",
        },
        {
          title: "我喜欢研读所有的事实，再有逻辑的做出决定。",
          userAnswer: "",
          category: "I",
        },
        {
          title: "没有美丽事物的生活，对我而言是不可思议的。",
          userAnswer: "",
          category: "A",
        },
        {
          title: "人们经常告诉我他们的问题。",
          userAnswer: "",
          category: "S",
        },
        {
          title: "我常能借着资讯网络和别人取得联系。",
          userAnswer: "",
          category: "E",
        },
        {
          title: "小心谨慎的完成一件事是件有成就感的事情。",
          userAnswer: "",
          category: "C",
        },
      ],

      selectedQuestions: [],
      showResults: false,
      result: "",
    };
  },
  created() {
    // 组件创建时调用selectQuestionCount方法初始化题目
    this.selectQuestionCount();
  },
  methods: {
    selectQuestionCount() {
      // 按照职业类型分类的问题组
      const questionGroups = {
        R: [], // 现实
        I: [], // 研究
        A: [], // 艺术
        S: [], // 社会
        E: [], // 企业
        C: [], // 传统
      };

      // 将所有问题按照职业类型分组
      this.allQuestions.forEach((question) => {
        questionGroups[question.category].push(question);
      });

      // 清空已选择的问题
      this.selectedQuestions = [];

      // 计算每个职业类型需要抽取的题目数量
      const questionsPerCategory =
        this.questionCount / Object.keys(questionGroups).length;

      // 对每个职业类型进行操作
      for (const category in questionGroups) {
        // 打乱该职业类型的题目顺序
        const shuffled = this.shuffleArray(questionGroups[category]);
        // 从打乱后的题目中抽取指定数量的题目
        const selected = shuffled.slice(0, questionsPerCategory);
        // 将抽取到的题目添加到已选择的问题中
        this.selectedQuestions.push(...selected);
      }

      // 打乱已选择题目的顺序
      this.selectedQuestions = this.shuffleArray(this.selectedQuestions);
    },
    // 用于打乱数组顺序的函数
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // 交换数组中的两个元素
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    // 用户选择答案时调用
    selectAnswer(index, answer) {
      // 将用户的答案存储到对应问题的userAnswer属性中
      this.selectedQuestions[index].userAnswer = answer;
    },
    // 用户提交测试时调用
    submitTest() {
      // 初始化结果对象，用于存储每个职业类型的得分
      let results = {
        R: 0,
        I: 0,
        A: 0,
        S: 0,
        E: 0,
        C: 0,
      };
      // 遍历已选择的问题
      this.selectedQuestions.forEach((question) => {
        // 如果用户答对了问题，增加对应职业类型的得分
        if ("Unsure" === question.userAnswer) {
          results[question.category]++;
        }
        if ("yes" === question.userAnswer) {
          results[question.category]++;
          results[question.category]++;
        }
      });
      //        // 计算得分最高的职业类型作为测试结果
      //        // this.result = Object.keys(results).reduce((a, b) =>
      //        //   results[a] > results[b] ? a : b
      //        // );

      // 将字母结果转换为中文文字
      // 将字母结果转换为中文文字和说明
      const resultMap = {
        R: {
          name: "研究型",
          description:
            "喜欢各种研究型工作\n如实验室研究员、医师、产品检验员、数学、物理学、化学、生物学等自然科学研究者、图书馆技师、计算机程序编制者和电子技术工作者等等。这类人通常具有较高的数学和科研能力，喜欢独立工作，喜欢解决问题；喜欢同观念而不是人或事务打交道。他们逻辑性强、好奇、聪明、仔细、独立、安详、俭朴。",
        },
        I: {
          name: "艺术型",
          description:
            "喜欢各种艺术型工作，如音乐家、演员、绘图员、画家、摄影师、室内设计师、服装设计师、装饰家、广告制作人、文艺评论员、文化顾问等等。这类人通常具有较高的创造力，喜欢自由自在地工作；他们敏感、情绪化、主观、具有想象力、表现欲、热情、直觉等特点。",
        },
        A: {
          name: "社会型",
          description:
            "喜欢各种社会型工作，如教师、教育行政人员、心理学家、社会学家、社会工作者、公共关系代表、推销员、人事专员、服务行业、政治家等等。这类人通常善于同他人交往，善于理解别人的想法和情绪；他们善良、真诚、热情、友好、喜欢帮助他人，渴望得到别人的认可和接纳。",
        },
        S: {
          name: "常规型",
          description:
            "喜欢各种常规型工作，如会计、出纳员、法律文书、行政管理人员、办事员、档案管理员、秘书、图书管理员、电脑操作员、保险业务员等等。这类人通常具有较高的条理性、细心、耐心、恒心；他们喜欢按照规定和程序去完成工作，喜欢有序、稳定、安全的工作环境。",
        },
        E: {
          name: "企业型",
          description:
            "喜欢各种企业型工作，如企业家、经纪人、行政管理人员、广告代理商、财务规划师、拍卖师、销售员、市场调研人员等等。这类人通常具有较强的领导能力和组织能力，喜欢承担风险，喜欢创造性地解决问题；他们果断、自信、有冒险精神、善于交际和说服。",
        },
        C: {
          name: "传统型",
          description:
            "喜欢各种传统型工作，如科学家、医生、律师、经济学家、图书馆员、研究员、物理学家、工程师、会计师等等。这类人通常具有较高的思维能力和分析能力，喜欢解决复杂的理论和实际问题；他们认真、踏实、谨慎、保守、有条理、有自制力。",
        },
      };

      // 将测试结果转换为数组并排序
      const resultArray = Object.keys(results)
        .map((category) => {
          return { category, score: results[category] };
        })
        .sort((a, b) => b.score - a.score);
      // 取得得分最高的职业类型
      const highestResult = resultArray[0];
      // 设置测试结果
      this.result = {
        type: resultMap[highestResult.category],
        score: highestResult.score,
      };
      console.log(results);
      // 显示测试结果
      this.showResults = true;
    },
  },
  computed: {
    isAnswered() {
      // 获取所有已选题目中没有用户答案的题目
      const unansweredQuestions = this.selectedQuestions.filter((question) => {
        return !question.userAnswer;
      });
      // 如果存在未回答的题目，返回 false，否则返回 true
      return unansweredQuestions.length === 0;
    },
  },
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.holland-test {
  min-height: 82vh;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.question {
  margin-bottom: 16px;
}

.results {
  margin-top: 24px;
}

.foot {
  height: 15vh;
  width: 100%;
  background-color: #b73636;
}
</style>
