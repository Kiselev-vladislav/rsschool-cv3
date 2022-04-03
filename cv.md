# Kiselev Vladislav

![My photo](My_photo.jpg)

## Contacts

* Adress: Belarus, Minsk, Surganova st.
* Phone: +375256324209
* E-mail: vladk-target@yandex.ru
* Discord: Vladislav Kiselev#7774
* [GitHub](https://github.com/Kiselev-vladislav?tab=repositories)

## About me

My main job is freelance online advertising.

I have experience in team management. Former founder of a tourism company. Subordinate to 6 people.

My hobby is my family. I have a wife and a child. I devote my free time to my family

## Skils

* HTML
* CSS
* JavaScript
* Git
* React
* SCSS

## Code Example

**Task:** Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

```javascript
function order(words){
    let arr = words.split(' ')
    let result = []
    for(let i = 1; i < 10; i++){
      for(elem of arr) {
          if(elem.indexOf(i) >= 0)
          result.push(elem)
      }
    }
    return result.join(' ')
  }
  ```

**Task:** In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

  ```javascript
  function highAndLow(numbers){
  let arr = numbers.split(' ').map(Number)
  let maxnum = String(Math.max.apply(null, arr))
  let minnum = String(Math.min.apply(null, arr))
  return maxnum + ' ' + minnum
}
```

## My project

* [My CV](https://github.com/Kiselev-vladislav/rsschool-cv/tree/gh-pages)

## Education

* RS School

## Languages

* Russian
* English (A1)
