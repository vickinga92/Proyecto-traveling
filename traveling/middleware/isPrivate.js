export default function ({ store, redirect }) {
  if (!store.state.isAuth) {
    return redirect('/login')
  }
}

