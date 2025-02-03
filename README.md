## Tanıtım Projesi

### Kurulum 
    npx --legacy-peer-deps create-react-app tanitim --template typescript
### Sorunları Girerilmesi
    NOT!!! Projenin package.json dosyasında react 19 sürümlerini 18 ile değiştirmek ve tekrardan npm install ile 
    kurulumu tamamlamak gerekli.
```json
  "dependencies": {  
    "react": "^18.3.1",
    "react-dom": "^18.3.1",   
  },
```
    - npm install
    NOT:    yukarıda ki düzenlemeyi yaptıkran sonra npm install yapmak gereklidir. burada unutmamanız gereken husus,
    öncelikle projenin dizine geçiş yapmanız gerekiyor.
    - cd tanitim
### Eklentiler

    - npm i bootstrap@5.3.3
    - npm i react-router
    - npm i react-router-dom
    - npm install sweetalert --save

### GErekli hazırlıkları yapalım

    gereksiz kodlar, yorum satırları ve kullanılmayan dosyalar silinsin.

### index.tsx

    index içerisine sayfa yönlendirmelerini yönetmek için oluşturacağımız routerpage.tsx i
    render içerisine ekleyerek düzenliyoruz.

### Routerpage yapısı

    ilk olarak bağımlılıları ekliyoruz.
``` javascript
import {
    BrowserRouter, Routes, Route
} from 'react-router-dom'
```
    ardından return kısmına gerekli routing eklemelerini yapıyoruz.


```javascript
function Routerpage() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage />}/>
            <Route path='/admin-panel' element={<AdminPanel />}/>                
        </Routes>
    </BrowserRouter>
  )
}
```


