let inputs = document.querySelectorAll('input[data-rule]');

for(let input of inputs) {
    input.addEventListener('blur', function(){
        // console.log(this)
        let rule = this.dataset.rule;
        let value = this.value;
        let check;

        switch(rule) {
            case 'mail': 
            check = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})/g.test(value);
        }
        this.classList.remove('invalid');
        this.classList.remove('valid');
        if (check) {
       

            this.classList.add('valid');
        } else {
            this.classList.add('invalid');
        } 
       
        
    });
}