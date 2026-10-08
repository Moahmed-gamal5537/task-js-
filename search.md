1- What are the differences between let, const, and var
   1-Variables declared with var are hoisted but initialized with undefined 
      (يعنى بعلن عن متغير بقيمه var و بعرفه بقيه undefined)
   2-Variables declared with let and const are also hoisted, but not initialized.
      ( ويتم تعرفه المتغيرات باستخدام let,const ولكن لا يتم تهيئتها )
2-What is the difference between == and ===
   1-(==):comparison value only , result (true , false)
 ex: (5==5) resalt =true , 5=="5" resualt =true (لان بيقارن قيم بس)
   2- (===) comparison value & datatype  , reasualt (true , false)
 ex: (5===5) resualt=true , 5==="5" resualt = false (لان === بتقارن قيم و كلام )
3-Why does "10" + 5 return "105", while "10" - 5 returns 5?
   console.log("10" + 5) resualt=(105) (operator + يقدر يعمل concaenation يعنى يخلى العمليه كلها string)
   consolr.log("10" - 5) resualt = 5 (operator - مش بيقدر يعمل conactenation )
    string + string = string 
    string + numbar = string (concatenation)
    numbar+numbar = add
 4-What is the difference between undefined and null?
    1- (null) متغير مش واخد قيمه فى الوقت الحالى لكن مسموح ليه ياخد قيمه فى اى وقت و لو دخل عمليه حسابيه قيمه تحسب = 0 
      ex: console.log( 2+null) resualt = 2 console.log( 5-null) resualt=5 (null = 0)
    2-(undefined) المتغير موجود لكن مفيش اى قيمه ولا حتى 0 undefined != 0 != null لو دخل فى عمليه حسابيه بتكون غير معرفه لان ليس له قيمه 
      ex: console.log( 2 + undefined) resualt = NAN 