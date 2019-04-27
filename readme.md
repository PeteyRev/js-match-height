# js-match-height

Dependency-free vanilla js plugin to match element heights, with a few extras.

## Getting Started

```
npm i js-match-height --save
```

### Use

Import the library and simply instatiate with your elements, no options required. MatchHeight will correct heights if needed on window resize, using a debounce method to improve performance. 

```
import { MatchHeight } from 'js-match-height';
```

Pass your elements. 

```
const matchHeight = new MatchHeight('ul.list-items  li');
```

The timeout for the debounce method is defaulted at 250. You can set your time if needed. 

```
const matchHeight = new MatchHeight('ul.list-items  li', { timeout:400 });
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* jquery match height
