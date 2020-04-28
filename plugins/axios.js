export default function({ $axios, redirect }) {
  $axios.onRequest(config => {
    debugger;
    console.log(config);
    console.log("Making request to " + config.url);
  });
}
