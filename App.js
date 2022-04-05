import React, {useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import styles from './style/mainStyle';


export default function App(){
	
	const[display,displaySet]=useState(0);
	const[memoria, memoriaSet]=useState(0);
	const[operacao, operacaoSet]=useState("");
	

	function tecla(valor)
	{
		if(valor=="C")
		{
			displaySet(0)
			memoriaSet(0)
			operacaoSet("")
		}
		else if(valor=="=")
		{
			if(operacao=="+")
			{
				displaySet(memoria+display)
			}
			else if(operacao=="-")
			{
				displaySet(memoria-display)
			}
			else if(operacao=="X")
			{
				displaySet(memoria*display)
			}
			else if(operacao=="/")
			{
				displaySet(memoria/display)
			}
		}
		else if(valor=="+")
		{
			memoriaSet(display)
			operacaoSet(valor)
			displaySet(0)
			
		}
		else if(valor=="-")
		{
			memoriaSet(display)
			operacaoSet(valor)
			displaySet(0)
			
		}
		else if(valor=="X")
		{
			memoriaSet(display)
			operacaoSet(valor)
			displaySet(0)			
		}
		else if(valor=="/")
		{
			memoriaSet(display)
			operacaoSet(valor)
			displaySet(0)
		}
		else
		{
		displaySet(display*10+valor)
		}
	}

		return(

	<View style={styles.container}>
		
		<Text style={styles.display}>
			{display}
				</Text>

		<Text style={styles.operacao}>
			{memoria}{operacao}
				</Text>
		<Text></Text>

		<View style={styles.teclas}>

			<Button color='black' title="1" onPress={()=>tecla(1)}/> 	
			<Button color='black' title="2" onPress={()=>tecla(2)}/> 
			<Button color='black' title="3" onPress={()=>tecla(3)}/>
			<Button color='black' title="+" onPress={()=>tecla("+")}/> 

		</View>

		<View style={styles.teclas}>

			<Button color='black' title="4" onPress={()=>tecla(4)}/> 	
			<Button color='black' title="5" onPress={()=>tecla(5)}/> 
			<Button color='black' title="6" onPress={()=>tecla(6)}/>
			<Button color='black' title="-" onPress={()=>tecla("-")}/>

		</View>

		<View style={styles.teclas}>

			<Button color='black' title="7" onPress={()=>tecla(7)}/> 	
			<Button color='black' title="8" onPress={()=>tecla(8)}/>
			<Button color='black' title="9" onPress={()=>tecla(9)}/>
			<Button color='black' title="X" onPress={()=>tecla("X")}/>

		</View>


		<View style={styles.teclas}>

			<Button color='black' title="C" onPress={()=>tecla("C")}/>
			<Button color='black' title="0" onPress={()=>tecla(0)}/>
			<Button color='black' title="=" onPress={()=>tecla("=")}/>
			<Button color='black' title="/" onPress={()=>tecla("/")}/>

		</View>
	
	</View>
);
}