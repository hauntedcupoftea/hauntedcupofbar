import { App } from "astal/gtk4";
import style from "./styles/main.scss";
import Bar from "./widget/Bar";

App.start({
  css: style,
  main() {
    App.get_monitors().map(Bar)
  },
})
