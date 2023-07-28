const quizData = [
    {
      question: 'İtalya Serie da 2022-2023 sezonunda, 33 yıl aradan sonra tekrar şampiyon olan Napoli futbol takımının stadının adı nedir?',
      a: 'Diego Armando Maradona',
      b: 'Roberto Baggio',
      c: 'Zinedine Zidane',
      d: 'Pele',
      e: 'Maldini',
      correct: 'a',
    },
    {
      question: 'Hangisi Uluslararası Uzay İstasyonunda bugüne kadar yapılmış sporlardan biri değildir?',
      a: ' Beyzbol',
      b: 'Yağlı güreş',
      c: 'Satranç',
      d: 'Futbol',
      e: 'Voleybol',
      correct: 'b',
    },
    {
      question: 'Şu an sizinle hangisi arasındaki kütle çekimi kuvvetinin büyüklüğü daha fazladır?',
      a: 'Merkür',
      b: 'Ay',
      c: 'Kenan İmirzalıoğlu',
      d: ' Dünya',
      e: 'Satürn',
      correct: 'd',
    },
    {
      question: '"Şirinler" adlı çizgi filmde hangi adla bilinen şirinin kolunda kırmızı bir kalp vardır?',
      a: ' Obur Şirin',
      b: 'Şair Şirin',
      c: 'Güçlü Şirin',
      d: 'Şirine',
      e: 'Yaşlı Şirin',
      correct: 'c',
    },
    {
      question: ' Atlas Dağlarını gezmekte olan biri hangi ülkede olabilir?',
      a: 'Arjantin',
      b: 'Türkiye',
      c: 'Japonya',
      d: 'Arnavutluk',
      e: 'Fas',
      correct: 'e',
    },
  ]
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  const e_text = document.getElementById('e_text')
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]
  
    deselectedAnswers()
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
  }
  
  function deselectedAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false))
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id
      }
    })
    return answer
  }
  
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
  
    //console.log(answer)
  
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++
      }
      currentQuiz++
  
      if (currentQuiz < quizData.length) {
        loadQuiz()
      } else {
        quiz.innerHTML = `
        <h2> Test tamamlandı, ${score * 20} puan aldınız🥳 </h2>
        <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀  </button>
  
      `
      }
    }
  })