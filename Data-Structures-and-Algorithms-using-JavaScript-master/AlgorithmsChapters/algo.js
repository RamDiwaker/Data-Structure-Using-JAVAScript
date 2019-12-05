function fibonacci (n) {
  if (n <= 1) {
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

function fibonacci2 (n) {
  var first = 0
  var second = 1
  var temp = 0

  if (n === 0)
    return first
  else if (n === 1)
    return second
  
  var i = 2
  while (i <= n) {
    temp = first + second
    first = second
    second = temp
    i += 1
  }
  return temp
}

function Feasible (Q, k) {
  for (var i = 0; i < k; i++) {
    if (Q[k] === Q[i] || Math.abs(Q[i] - Q[k]) === Math.abs(i - k)) {
      return false
    }
  }
  return true
}

function NQueens (Q, k, n) {
  if (k === n) {
    console.log(Q)
    return
  }

  for (var i = 0; i < n; i++) {
    Q[k] = i
    if (Feasible(Q, k)) {
      NQueens(Q, k + 1, n)
    }
  }
}

function main1 () {
  var Q = [0, 0, 0, 0, 0, 0, 0, 0]
  NQueens(Q, 0, 8)
}

function TOHUtil (num, from, to, temp) {
  if (num < 1) {
    return
  }
  TOHUtil(num - 1, from, temp, to)
  console.log('Move disk ' + num + ' from peg ' + from + ' to peg ' + to)
  TOHUtil(num - 1, temp, to, from)
}

function TowersOfHanoi (num) {
  console.log('The sequence of moves involved in the Tower of Hanoi are :')
  TOHUtil(num, 'A', 'C', 'B')
}

function main2 () {
  TowersOfHanoi(3)
}

function isPrime (n) {
  var answer = (n > 1) ? 1 : 0
  for (var i = 2; i * i <= n; ++i) {
    if (n % i === 0) {
      answer = 1
      break
    }
  }
  return answer
}

function main () {
  console.log(fibonacci(10))
  console.log(fibonacci2(10))
  main1()
  main2()
}

main()