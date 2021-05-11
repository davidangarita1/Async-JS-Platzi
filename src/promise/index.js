const somethingWillHappen = () => {
    return new Promise((resolve, reject)=>{
        if (true) { // true si pasa, false si no pasa
            resolve('Hey!'); // Si se cumple
        } else {
            reject('Whooops!') // si no se cumple
        }
    });
};

somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err))

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject)=>{
        if (true) {
            setTimeout(()=>{
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Whoops!');
            reject(error); 
        }
    })
}

somethingWillHappen2()
.then(response => console.log(response))
.catch(err => console.error(err));


Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log('Array of results', response);
})
.catch(err => {
    console.error(err);
})