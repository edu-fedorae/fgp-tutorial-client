export default function({ store, redirect }) {
    if (store.getters['context/isAuthenticated'] = false) {
        return redirect('/');
    }
}