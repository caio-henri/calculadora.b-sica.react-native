import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container:
	{
		width:300,
		borderColor:'black',
		borderWidth: 10,
		flexDirection:'column',
		padding:20,
		borderRadius:20,
		margin:100,
		backgroundColor:'#FA8072',
	},

	display:
	{
		borderColor:'black', 
		borderWidth:5, 
		fontSize: 40
	},

	operacao:
	{
		fontSize: 30
	},

	teclas:
	{
		flexDirection:"row", 
		margin:20, 
		justifyContent:"space-between"
	}
	});

    export default styles;