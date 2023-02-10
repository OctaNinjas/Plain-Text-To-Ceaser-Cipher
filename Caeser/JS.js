// Learn from this link to get idea of how we take input from user  👉 https://youtu.be/f24_jFNyvtQ 👈

        input_do.addEventListener('input', function () {
            let c = this.value;

            let ceaserCipher = (str) => {

                let decoded = {
                    a: 'n', b: 'o', c: 'p',
                    d: 'q', e: 'r', f: 's',
                    g: 't', h: 'u', i: 'v',
                    j: 'w', k: 'x', l: 'y',
                    m: 'z', n: 'a', o: 'b',
                    p: 'c', q: 'd', r: 'e',
                    s: 'f', t: 'g', u: 'h',
                    v: 'i', w: 'j', x: 'k',
                    y: 'l', z: 'm'
                }

                str = str.toLowerCase();

                let decipher = '';
                for (let i = 0; i < str.length; i++) {
                    decipher += decoded[str[i]];
                }

                return decipher;
            }

            output_do.value = ceaserCipher(c);

        });

