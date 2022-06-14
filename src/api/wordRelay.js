import axios from "axios"

import { apiKey } from '../constants/wordRelayApiKey'


export const wordRelay = () => {
  fetch(`https://opendict.korean.go.kr/api/search?key=${apiKey}&q=안녕`)
  .then(res => console.log(res))
}

// https://opendict.korean.go.kr/api/search?key=8E9D659C28621BC5BB6AA77E6009099E