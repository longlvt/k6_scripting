import http from 'k6/http'
import { sleep } from 'k6'

export const options= {
    executor: 'per-vu-iterations',
    // executor: 'shared-iterations',
    vus: 10,
    iterations: 20,
    duration: '30s'
}

export default function() {
    http.get('https://k6.io')
    sleep(1)
    
}