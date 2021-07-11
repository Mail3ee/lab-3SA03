# Lab 3SA01 6210110636
## จากข้อที่ 7 ได้ศึกษาเพิ่มเติมและปรับปรุงเกม ดังนี้
1. ใช้ Lodash ในการสุ่มคำที่เป็นโจทย์จาก Array ที่กำหนดไว้
    * กำหนด const word = (["Hello", "Hi-COE", "Test123", "Good-Morning"]);
    * ใช้ชุดคำสั่ง _.sample(collection) เพื่อสุ่มคำจาก collection word และส่งค่าไปยัง Component WordCard
2. แสดงสถานะเมื่อทำสำเร็จ
    * ใช้ useState ใน app.js และส่งค่า props ไปยัง Component Wordcard
    * ใน function WordCard ใน Component WordCard เรียกใช้ props.setWord("Success") เพื่อส่งข้อความ Success ไปแสดงผลเมื่อผู้เล่นทำงานถูกต้อง
