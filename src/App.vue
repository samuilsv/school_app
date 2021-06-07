<template>
  <div class="app">
    <router-view class="main" />
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  border: none;
  font: inherit;
  vertical-align: baseline;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
html {
  display: block;
  box-sizing: border-box;
}
input,
button,
body {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  border: none;
}
body {
  height: 100%;
  margin: 0;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
