<script lang="ts">
  import SocialLinks from './SocialLinks.svelte';
</script>

<style>

</style>

<div class="md:flex justify-center p-6 ml-16 mr-16 text-primary">
  <img
    class="h-32 w-32 md:h-48 md:w-48 rounded-full mx-auto md:mx-0 md:mr-6"
    src="https://pbs.twimg.com/profile_images/460348174058520576/Ium7G3bW_400x400.jpeg"
    alt="" />
  <div class="text-center">
    <h2 class="text-6xl">Chetan Raju</h2>
    <div class="text-secondary text-2xl">Java, Javascript, TypeScript, AWS</div>
    <div class="text-disabled font-mono font-medium text-lg">chetan.raju@hotmail.com.au</div>
    <SocialLinks />
  </div>

</div>
