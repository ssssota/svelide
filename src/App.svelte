<script lang="ts">
  import SlideView from "./components/SlideView.svelte";
  import "./global.css";
  import HorizontalLayout from "./components/HorizontalLayout.svelte";
  import VerticalLayout from "./components/VerticalLayout.svelte";
  import slides from "$slides";
  const { listView } = $props<{ listView?: boolean }>();
  let scrollFn = $state<(() => void)[]>([]);
  let page = $state(0);

  $effect(() => {
    window.history.replaceState(null, "", `#${page}`);
  });

  const handleKeydown = (e: KeyboardEvent) => {
    switch (e.code) {
      case "ArrowRight":
      case "Space":
      case "Enter":
        // page.next();
        break;
      case "ArrowLeft":
        // page.prev();
        break;
    }
  };
  const Layout = listView ? VerticalLayout : HorizontalLayout;
</script>

<svelte:window on:keydown={handleKeydown} />

<Layout>
  {#each slides as Slide, i}
    {@const id = i.toString()}
    <SlideView
      {id}
      bind:scrollIntoView={scrollFn[i]}
      onleftclick={i > 0 ? scrollFn[i - 1] : undefined}
      onrightclick={i < slides.length - 1 ? scrollFn[i + 1] : undefined}
      onscreenenter={() => (page = i)}
    >
      <Slide />
    </SlideView>
  {/each}
</Layout>
