import React from 'react'
import { Formik, Field, Form } from 'formik'
import './App.css'

const dataForSurvey = [
  {
    code: 'times',
    question: 'Bạn có hay đi ăn vặt ?',
    type: 1,
    answer: [
      'Có',
      'Không',
    ],
  },
  {
    code: 'number',
    question: ' Tuần đi ăn mấy lần ?',
    type: 1,
    answer: ['1', '2', '3', '4'],
  },
  {
    code: 'attractive',
    question: 'Quán với tính chất như thế nào sẽ thu hút bạn ?',
    type: 2,
    answer: [
      'Có phục vụ xinh, dễ thương, nhiệt tình',
      'Đồ ăn ngon, rẻ',
      'Có phong cảnh đẹp',
      'nhạc nhẹ nhàng, du dương',
    ],
  },
  {
    code: 'lisOfFood',
    question: 'Bạn thích ăn những món nào ?',
    type: 2,
    answer: [
      'Mỳ cay',
      'Đồ nướng',
      'Lẩu',
      'Đồ chiên',
      'Món hàn'
    ],
  },
  {
    code: 'goWith',
    question: 'Bạn thường đi với ai?',
    type: 1,
    answer: [
      'Đi một mình',
      'Đi với bạn',
      'Đi với người yêu',
      'Đi với gia đình'
    ]
  },
  {
    code: 'timeOfDay',
    question: 'Bạn thường đi ăn vào khung giờ nào',
    type: 2,
    answer: [
      'Sáng',
      'Trưa',
      'Chiều',
      'Tối',
      'Khuya'
    ]
  },
  {
    code: 'advertisement',
    question: 'Làm cách nào bạn có thể biết được địa chỉ quán ăn',
    type: 1,
    answer: [
      'Qua facebook',
      'Tờ rơi',
      'Giới thiệu',
      'Internet',
      'ở dường lớn nên ghé vào thử'
    ]
  },
  {
    code: 'address',
    question: 'Nếu được làm chủ quán, bạn sẽ mở ở đâu?',
    type: 3,
    answer: [],
  },
]
function App() {
  const handleItemRender = (item) => {
    let component
    switch (item.type) {
      case 1:
        component = (
          <div className="answer">
            {item.answer.map((an, idx) => (
              <div className="answer-item" key={idx}>
                <label>
                  <Field type="radio" name={item.code} value={an} />
                  {an}
                </label>
              </div>
            ))}
          </div>
        )
        break
      case 2:
        component = (
          <div className="answer">
            {item.answer.map((an, idx) => (
              <div className="answer-item" key={idx}>
                <label>
                  <Field type="checkbox" name={item.code} value={an} />
                  {an}
                </label>
              </div>
            ))}
          </div>
        )
        break
      default:
        component = (
          <div className="answer">
            <Field type='text' name={item.code} placeholder="Nhập câu trả lời" />
          </div>
        )
        break
    }
    return component
  }
  return (
    <div className="container">
      <h1 className="title">Khảo sát tính cách ăn uống</h1>
      <div className="content">
        <Formik
          initialValues={{}}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500))
            alert(JSON.stringify(values, null, 2))
          }}
        >
          <Form>
            {dataForSurvey.map((item, idx) => (
              <div key={idx} className="question-content">
                <div className="question">{item.question}</div>
                {handleItemRender(item)}
              </div>
            ))}
            <button type="submit">Trả lời</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default App
