<script lang="ts">
  export let onLeftClick: svelte.JSX.EventHandler<MouseEvent, HTMLDivElement> | undefined = undefined;
  export let onRightClick: svelte.JSX.EventHandler<MouseEvent, HTMLDivElement> | undefined = undefined;
</script>

<div class="wrapper">
  <section class="slide">
    <slot />
  </section>
  {#if onLeftClick != null}
    <div class:cursor={onLeftClick != null} class="left" on:click={onLeftClick} />
  {/if}
  {#if onRightClick != null}
    <div class:cursor={onRightClick != null} class="right" on:click={onRightClick} />
  {/if}
</div>

<style>
  .wrapper {
    background-color: black;
    width: 100%;
    height: 100%;

    padding: 0;
    margin: 0;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left {
    position: absolute;
    width: 50%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .left.cursor {
    cursor: url(../images/left.svg) 0 0, pointer;
  }
  .right {
    position: absolute;
    width: 50%;
    height: 100%;
    right: 0;
    top: 0;
  }
  .right.cursor {
    cursor: url(../images/right.svg) 0 0, pointer;
  }
  :root {
    --slide-width: min(100vw, calc(400vh / 3));
    --slide-height: min(75vw, 100vh);
    --base-font-size: calc(var(--slide-width) / 40);
  }

  .slide {
    background-color: var(--background-color, white);

    width: var(--slide-width);
    height: var(--slide-height);
  }
  .slide :global(h1) {
    font-size: calc(var(--base-font-size) * 2);
  }
  .slide :global(h2) {
    font-size: calc(var(--base-font-size) * 1.6);
  }
  .slide :global(h3) {
    font-size: calc(var(--base-font-size) * 1.4);
  }
  .slide :global(h4), .slide :global(h5), .slide :global(h6), .slide :global(p), .slide :global(li) {
    font-size: calc(var(--base-font-size) * 1.2);
  }
</style>
