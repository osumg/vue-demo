export default {
	growSlow(context, payload) {
		setTimeout(() => {
			context.commit('grow', payload)
		}, 1000)
	}
}
