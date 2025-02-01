<script setup lang="ts">
const props = defineProps({
  songUrl: String,
  theme: {
    type: String,
    default: "light"
  }
});

const generateRandomId = (length: number = 8): string => {
  // 定義可用的字元集合，包括大小寫字母與數字
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = ""; // 初始化結果字串
  for (let i = 0; i < length; i++) {
    // 隨機選取一個字元並追加到結果字串
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result; // 返回生成的字串
};
const elementId = generateRandomId(); // 生成一個隨機 ID

onMounted(() => {
  console.log(props.songUrl?.split("/")?.join(":"));
  (window as any).onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById(elementId);
    const options = {
      uri: `spotify:${props.songUrl?.split("/")?.join(":")}`,
      theme: props.theme
    };
    const callback = () => {};
    IFrameAPI.createController(element, options, callback);
  };
});
</script>

<template>
  <iframe
    :id="elementId"
    src="https://open.spotify.com/embed/track/2VEt42QSQxILgEf9B50xxm"
    width="300"
    height="380"
    frameborder="0"
    allowtransparency="true"
    allow="encrypted-media"
  ></iframe>
</template>

<style scoped lang="scss">
iframe {
  width: 100%;
}
</style>
