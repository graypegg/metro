<template>
	<div class="page">
    <img src="../img/logo.png"/>
    <h1>Métro</h1>
	</div>
</template>

<style lang="scss" scoped>
  @import "../sass/default.scss";
  @import "../sass/page.scss";

  .page {
    background: $light-grey;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background: url(../img/launch-bg.png) center no-repeat;
      background-size: cover;
      transform: scale(1.25);
    }

    img {
      display: block;
      position: absolute;
      left: 50%;
      top: calc(50% - 50px);
      transform: translate(-50%, -50%);
      width: 375px;
    }

    h1 {
      position: absolute;
      top: calc(50% + 70px);
      transform: translateY(-50%);
      width: 100%;
      font-family: Helvetica, sans-serif;
      font-size: 3.5rem;
      text-align: center;
      color: $warm-grey;
      margin: 0;
    }
  }
</style>
