import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import { ScrollView } from "react-native-gesture-handler";

const AboutUs = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
       <Image
        style={styles.logo}
        source={require("../../image/img/assets2/cheese1.jpg")}
      />
      
      <Text style={styles.description}>
        We pride ourselves on being the premier source of all things cheesy! Driven by our belief that food is a portal of discovery, we carefully handpick specialty cheeses from around the globe and here in the Philippines for our fellow curious and discerning foodies. 
      </Text>
      <Image
        style={styles.logo}
        source={require("../../image/img/assets2/cheese2.jpg")}
      />
      <Text style={styles.description}>
Cheese has a rare gift to be versitile in flavor and function, and through our intentional curation and creation, we share our unending curiousity to learn and taste more.      </Text>

<Text style={styles.title}>Meet our Team!</Text>
<Image
        style={styles.logo}
        source={require("../../image/img/assets2/team.jpg")}
      />
      <Text style={styles.description}>
      The group consists of experienced professionals with diverse skill sets. Overall, this group has a range of technical skills and problem-solving abilities, and enjoys working collaboratively to find innovative solutions to complex challenges.
</Text>

  <View style={styles.cony}>
    <Text></Text>
<Image
        style={styles.pic}
        source={require("../../image/img/assets2/robin.jpg")}
      />
<Text style={styles.descriptions}>
Robin Soriano is an experienced full-stack developer with a passion for creating scalable web applications. He is proficient in both 
frontend and backend development, and has a strong understanding of various programming languages and frameworks. He is a natural problem solver
 who enjoys working collaboratively to find innovative solutions to complex technical challenges.
</Text></View>
<View style={styles.cony}>
    <Text></Text>
<Image
        style={styles.pic}
        source={require("../../image/img/assets2/alexa.jpg")}
      />
<Text style={styles.descriptions}>
Alexa Katherine Reyes is a mobile app developer who specializes in both iOS and Android development. She has experience creating high-performance, responsive apps using Swift, Kotlin, and other modern mobile app development frameworks.
 Alexa is a team player who enjoys collaborating with other developers and designers to bring mobile app ideas to life.
</Text></View>
<View style={styles.cony}>
    <Text></Text>
<Image
        style={styles.pic}
        source={require("../../image/img/assets2/jamile.jpg")}
      />
<Text style={styles.descriptions}>
Jamile Igagamao is also a mobile app developer with expertise in both iOS and Android. She has also experience using Swift, Kotlin, and other cutting-edge mobile app development frameworks to build high-performance, responsive apps.
 Jamile appreciates working in teams with other programmers and designers to build new mobile app concepts.
</Text></View>
<View style={styles.cony}>
    <Text></Text>
<Image
        style={styles.pic}
        source={require("../../image/img/assets2/nyx.png")}
      />

<Text style={styles.descriptions}>
Nyx Rodriguez is a front-end developer with an eye for detail and a passion for creating beautiful user interfaces. He is skilled in various frontend technologies such as HTML, CSS, and JavaScript, and has experience using popular frameworks like React and Angular. 
Nyx is a creative thinker who is always looking for ways to make applications more intuitive and user-friendly.
</Text></View>
<View style={styles.cony}>
    <Text></Text>
<Image
        style={styles.pic}
        source={require("../../image/img/assets2/mitch.jpg")}
      />
<Text style={styles.descriptions}>
Mitch Aynsley Tuazon is a cybersecurity expert who specializes in network security and information security. 
He is skilled in various cybersecurity technologies and protocols, and has experience working with large organizations to
 implement cybersecurity measures to protect against cyber threats. Mitch is a critical thinker who is always up to date with the latest 
 cybersecurity trends and best practices.


</Text></View>

      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
   textAlign: "justify",
    alignItems: 'center',
    backgroundColor: '#FBDB65',
    
  },
  cony:{
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#Ffffff',
    marginVertical: 20,
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    rowGap: 20,
    backgroundColor: '#f6df8a',
  marginTop:20

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    
    
  },
  logo: {
    width: '100%',
    height: 200,
   marginBottom: 20,
   borderRadius: 40
 
  },
  pic:{
    width: 200,
    height: 200,
   marginBottom: 20,
   borderRadius:200,
   
   

  },
  description: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'justify',
    
  },
  descriptions: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'justify',
    marginLeft: 80
  },
});
export default AboutUs