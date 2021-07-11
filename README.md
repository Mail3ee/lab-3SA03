# Lab 3SA01 6210110636
## จากข้อที่ 7 ได้ศึกษาเพิ่มเติมและปรับปรุงเกม ดังนี้
1. ใช้ Lodash ในการสุ่มคำที่เป็นโจทย์จาก Array ที่กำหนดไว้
    * กำหนด const word เป็น array 
    ```js 
        const word = (["Hello", "Hi-COE", "Test123", "Good-Morning"]); 
    ```

    * ใช้ชุดคำสั่ง _.sample(collection) เพื่อสุ่มคำจาก collection word และส่งค่าไปยัง Component WordCard
    ```js
        return ( 
            < div >
                <WordCard value={ _.sample(text) } word = {word} setWord = {setWord}  />
            </div>
        );
    ```
2. แสดงสถานะเมื่อทำสำเร็จ
    * ใช้ useState ใน app.js และส่งค่า props ไปยัง Component Wordcard
    ```js 
        const [word, setWord] = useState("");
    ```
    * ใน function WordCard ใน Component WordCard เรียกใช้ props.setWord("Success") เพื่อส่งข้อความ Success ไปแสดงผลเมื่อผู้เล่นทำงานถูกต้อง
    ```js
        props.setWord("Success")
    ```

    ```js
        return (
            <div >
                {
                    state.chars.map((c, i) => 
                        <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt} />
                    )
                }
                <h1>{props.word}</h1>
            </div>
        )
    ```

3. แสดงสถานะเมื่อทำสำเร็จไม่สำเร็จ เป็นเวลาตามที่กำหนด
    * ใน function WordCard ใน Component WordCard เรียกใช้ props.setWord("Fail!!") เพื่อส่งข้อความ Fail!! ไปแสดงผลเมื่อผู้เล่นทำงานไม่ถูกต้อง
    ```js
        props.setWord("Fail!!")
    ```
    * แสดงผล 2 วินาที โดยใช้ function setTimeout และเปลี่ยนค่า word เป็น ""
    ```js 
        setTimeout(() => {
            props.setWord("")
        }, 2000);   
    ```
4. รีเฟรซหน้าเมื่อทำงานถูกต้อง 
    * ใน function WordCard ใน Component WordCard เรียกใช้  function setTimeout เพื่อหน่วงเวลา และใช้  window.location.reload() เพื่อรีเฟรซเว็บเพจ
    ```js 
        setTimeout(() => {
            window.location.reload()
        }, 2000);
    ```
                   