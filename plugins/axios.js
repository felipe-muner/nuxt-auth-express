export default function({ $axios, redirect }) {
  $axios.setBaseURL("http://localhost:8081");

  $axios.onRequest(config => {
    $nuxt.$loading.start();

    // console.log(config);
    // console.log("Making request to " + config.url);
  });

  $axios.onResponse(config => {
    $nuxt.$loading.finish();
    // console.log(config);
    // console.log("Coming back from response to");
  });

  $axios.onError(error => {});
}
