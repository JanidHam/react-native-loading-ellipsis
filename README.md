# react-native-loading-ellipsis

A simple, loading dots component like Airbnb loading. Ideal for everywhere.

![](assets/ellipsis-loading.gif)


## Installation

If using npm:

```
npm i react-native-loading-ellipsis
```

## Usage

```
import EllipsisLoading from 'react-native-loading-ellipsis'
```

Simply place a `<EllipsisLoading />` inside of any compnent.

```
<View style={{ flex: 1 }}>
    <EllipsisLoading />
</View>
```

### Styling Usage
EllipsisLoading is fully customizable using the `styleDot, animationDelay, numberOfDots,  minOpacity, and dotSize` props.

Example usage to change dots color:

```
const styleDot = {
    backgroundColor: '#000000',
    marginRight: 3,
};

return (
    <View style={{flex: 1}}>
        <EllipsisLoading styleDot={styleDot} />
    </View>
)
```

## Documentation

### EllipsisLoading Component
| Name                      | Description                              | Default     | Type   |
|---------------------------|------------------------------------------|-------------|--------|
| styleDoT                  | Dot styles                               | Object      | Object |
| animationDelay            | Delay for animation in milliseconds      | 300         | Number |
| numberOfDots              | Number of dot to display                 | 3           | Number |
| minOpacity                | Opacity of dot animatino                 | 0.2         | Number |
| dotSize                   | Size of the dots                         | 12          | Number |

## Contributing
Pull requests are always welcome! Feel free to open a new GitHub issue for any changes that can be made.

## Author
Janid Ham | [https://janidham.com](https://janidham.com)

## License
[MIT](./LICENSE)
