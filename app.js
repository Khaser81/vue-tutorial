const app = Vue.createApp({
  //data functions
  //template : '<h2>I am the template</h2>'

  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
    };
  },
  methods: {
    changeTitle() {
      //   console.log("you clicked me");
      this.title = "Words of Randiance";
    },
    changeTitle2(title) {
      this.title = title;
    },
    toggleShowBooks(){
        this.showBooks = !this.showBooks
    },
    handleEvent(e, data){
        console.log(e, e.type)
        if(data){
            console.log(data)
        }
    }
  },
});

app.mount("#test");
