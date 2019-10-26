 export const exampleMixin = {
 	created() {
 		console.log("Hello from imported mixin!");
 	},
 	methods: {
 		logMessage: function() {
 			console.log(this.docState);
 		}
 	}
}