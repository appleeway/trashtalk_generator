//define sample function to randomly return a item in an array
function randomChoose(wordsArr) {
  const index = Math.floor(Math.random() * wordsArr.length)
  return wordsArr[index]
}

//define a sentence generator function
function generateSentence(jobs) {
  // define tasks
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點code'],
    designer: ['畫一張圖', '改個logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個business model', '找 VC 募錢']
  }
  // define pharses
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // define target and assign task colloction
  let targetTask = []
  let target = ''
  switch (jobs) {
    case 'engineer':
      targetTask = task.engineer
      target = '工程師'
      break
    case 'designer':
      targetTask = task.designer
      target = '設計師'
      break
    case 'entrepreneur':
      targetTask = task.entrepreneur
      target = '創業家'
      break
    default:
      return "請幫我從裡面選一個喔！"
  }

  // return sentence
  return `身為一個${target}${randomChoose(targetTask)}${randomChoose(phrase)}吧！`
}
// export generatePassword function for other file to use
module.exports = generateSentence