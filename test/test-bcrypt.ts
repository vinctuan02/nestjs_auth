import * as bcrypt from 'bcrypt';

(async () => {
    // const password = 'vinc1';
    // const hash = '$2b$10$JSoyqVnEemiHao58cL3R/.Buqy/NZ1ODRJMeYqRLyuieGFd1lfhBa';
    // $2b$10$8szMhyknRekBVJVd0NwuxuV04HhYRPOVMUuZifkV/JPBkHNR9FUai

    const password = 'vinc12';
    const hash = await bcrypt.hash(password, 10);

    console.log('New hash for vinc1:', hash);

    console.log('Raw password:', JSON.stringify(password));
    console.log('Hash:', JSON.stringify(hash));

    const match = await bcrypt.compare(password, hash);
    console.log('Match:', match);
})();
