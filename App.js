import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
        <ScrollView style={style.container}>
    <View style={styles.container}>
      
      <Text>FLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae bibendum ligula, nec tempus dui. Curabitur suscipit est sem, at tempus massa sagittis in. Nullam eleifend, augue nec lacinia convallis, est nulla bibendum arcu, vel commodo felis purus ac odio. Nam in iaculis risus. Donec sodales nibh id risus pulvinar venenatis. Nulla dignissim ipsum neque, a iaculis eros gravida eget. Sed a mi sed sapien elementum hendrerit et vel ex. Aliquam convallis diam at laoreet sagittis. Phasellus volutpat sollicitudin arcu, non posuere metus vestibulum a.

Maecenas tristique tristique viverra. Morbi id leo sed erat gravida cursus. Maecenas nunc nibh, ultricies at nisl vel, auctor dignissim lorem. Pellentesque feugiat orci elit. Ut quis tincidunt urna. Aenean a eros feugiat, pulvinar justo suscipit, tincidunt ipsum. Maecenas pharetra dapibus risus. Pellentesque iaculis purus id nunc pretium ornare. Duis ornare in arcu nec accumsan. Donec hendrerit turpis lacus, et venenatis odio tincidunt sed. Aliquam non tristique sem, at tincidunt urna. Vestibulum at massa sed neque laoreet lacinia. Suspendisse ullamcorper nibh at dolor ultrices euismod. Suspendisse vel vestibulum purus, quis euismod lacus. Phasellus non purus ut odio blandit vehicula quis ut est.

Nam tincidunt nunc ac enim semper, eget cursus lorem euismod. Ut a arcu quis nulla aliquet ultrices. Quisque tempor ex nisi, vitae vehicula sapien aliquet sed. Donec sed augue leo. Sed sit amet auctor ante. Integer enim orci, venenatis ac venenatis ac, porttitor eu purus. Phasellus vulputate erat sed libero hendrerit, at blandit sem eleifend. Nunc ac consectetur sapien, sed mattis massa. Sed vulputate blandit scelerisque. Sed scelerisque libero quis sagittis auctor. Curabitur euismod, lacus et tincidunt vestibulum, mauris leo malesuada dolor, vitae scelerisque velit tortor vitae purus. Quisque in mauris cursus libero tincidunt semper.

Mauris imperdiet eu ex et facilisis. Nam mattis lacinia quam, nec consectetur sapien molestie id. Nulla quis molestie velit. Fusce facilisis quam in tristique feugiat. Sed nunc dolor, vehicula id tristique at, luctus ornare est. Phasellus ac lorem id nibh lacinia pharetra vitae at elit. Fusce pretium tincidunt tellus. Fusce tincidunt elit justo, eu interdum sem rutrum nec. Suspendisse at consequat sem, ac tincidunt velit. Donec consequat placerat libero, in laoreet purus porta vel. Pellentesque sodales sollicitudin erat, ut convallis ligula pulvinar a. Sed urna nisi, porta ut lobortis pharetra, tempus sit amet tortor. Phasellus a mattis enim, at luctus sem. Duis sed hendrerit leo. Nulla facilisis tellus quis lorem mattis maximus.

Nulla porttitor fermentum eleifend. Ut venenatis felis quis bibendum ornare. Sed at nulla ac tortor lobortis efficitur at ut velit. Proin id tempor nunc, non aliquet eros. Vivamus semper faucibus mauris vitae varius. Suspendisse neque nisi, interdum eu eros nec, ultricies blandit risus. Duis ac nisl tellus. Sed ut nulla lacus. Cras lobortis sit amet mauris vel lobortis. Nullam vel egestas tellus. Fusce facilisis velit in erat porttitor, nec efficitur mi tempor. Quisque eget consectetur libero, sit amet cursus odio. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      <StatusBar style="auto" />
      
        
    </View>
    </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
