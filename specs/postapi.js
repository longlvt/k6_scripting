import http from 'k6/http'
import { sleep, check } from 'k6'

export const options= {
    vus: 1,
    duration: '2s'
}

export default function() {
    const url = 'https://dummyjson.com/auth/login'
    const body = JSON.stringify({
        username: `${__ENV.USERNAME}`,
        password: `${__ENV.PASSWORD}`
    })

    const params = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const res = http.post(url, body, params)

    check(res, {
        'response code was 200': (res) => res.status == 200,
        'does username exist in response body': (res) => Object.hasOwn(JSON.parse(res.body), 'username1')
    })

    // const bodyJSON = JSON.parse(res.body)
    // console.log("BODY:", JSON.stringify(bodyJSON))

}