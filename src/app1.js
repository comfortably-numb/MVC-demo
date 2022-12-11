import $ from "jquery";
import "./app1.css";

//数据相关放到m
const m = {
  data: {
    //初始化数据
    n: parseInt(localStorage.getItem("n")),
  },
};
//视图相关放到v
const v = {
  el: null,
  html: `
  <section>
  <div class="output">
    <span id="number">{{n}}</span>
  </div>
  <div class="actions">
    <button id="add1">+1</button>
    <button id="minus1">-1</button>
    <button id="mul2">*2</button>
    <button id="divide2">÷2</button>
  </div>
  </section>
  `,
  update() {
    //c.ui.number.text(m.data.n || 100);
  },
  render() {
    if (v.el === null) {
      console.log("abcd");
      v.el = $(v.html.replace(`{{n}}`, m.data.n)).appendTo($("body>.page"));
    } else {
      console.log("dsad");
      v.el = v.el.replaceWith($(v.html.replace(`{{n}}`, m.data.n)));
    }
  },
};
//其他放到c
const c = {
  init() {
    v.render();
    c.ui = {
      button1: $("#add1"),
      button2: $("#minus1"),
      button3: $("#mul2"),
      button4: $("#divide2"),
      number: $("#number"),
    };
    c.bindEvents();
  },
  bindEvents() {
    c.ui.button1.on("click", () => {
      m.data.n += 1;
      console.log("render再执行");
      v.render();
    });
    c.ui.button2.on("click", () => {
      let n = parseInt(c.ui.number.text());
      n -= 1;
      localStorage.setItem("n", n);
      c.ui.number.text(n);
    });
    c.ui.button3.on("click", () => {
      let n = parseInt(c.ui.number.text());
      n *= 2;
      localStorage.setItem("n", n);
      c.ui.number.text(n);
    });
    c.ui.button4.on("click", () => {
      let n = parseInt(c.ui.number.text());
      n /= 2;
      localStorage.setItem("n", n);
      c.ui.number.text(n);
    });
  },
};

c.init();
