export default async function({ $auth, redirect, store }) {
  const { user } = $auth.$state;
  if (user && user.UserID === 1) {
  } else {
    store.dispatch("snackbar/setSnack", "please contact the adm.");
    redirect("/");
  }
}
