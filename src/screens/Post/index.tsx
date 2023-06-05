import { View, Text, ScrollView, useWindowDimensions } from 'react-native';
import {useState, useRef} from 'react'
import { styles } from './styles';

import { ProgressBar } from './../../components/ProgressBar/index';
import { Animated } from 'react-native-reanimated';

type ScrollProps = {
  layoutMeasurement: {
    height: number;
  };
  contentOffset: {
    y: number;
  };
  contentSize: {
    height: number;
  };
}

export function Post(){

const [percentage, setPercentage] = useState(0);

const scrollRef = useRef<ScrollView>(null);

const dimensions = useWindowDimensions();


  function scrollPercentage({ contentSize, contentOffset, layoutMeasurement }: ScrollProps) {
const visibleContent = Math.ceil((dimensions.height / contentSize.height) * 100) 
    const value = ((layoutMeasurement.height + contentOffset.y ) / contentSize.height) * 100;
setPercentage(value < visibleContent ? 0 : value );
}

function handleScrollMoveTop(){
  scrollRef.current?.scrollTo({
    x: 0,
    y: 0,
  Animated: true

  })
} 
  return (
    <View style={styles.container}>
      <ScrollView 
      ref={scrollRef}
      scrollEventThrottle={16}
      showVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
      onScroll={(event) => scrollPercentage(event.nativeEvent)}
      >
    <Text style={styles.title}>
       Lorem ipsum 
    </Text>
  <View>
    <Text style={styles.text}> 
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    </Text>

    <Text style={styles.text}> 
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    </Text>

    <Text style={styles.text}> 
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    </Text>

    <Text style={styles.text}> 
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    </Text>

    <Text style={styles.text}> 
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    </Text>

    <Text style={styles.text}> 
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam fugit autem iste similique, nostrum non iure qui soluta error inventore id obcaecati repellat quia ea animi voluptatem, quod minus.
    </Text>
 </View>
 </ScrollView>
 <ProgressBar 
 value={percentage}
 onMoveTop={handleScrollMoveTop}
 />
    </View>
    
  );
}
