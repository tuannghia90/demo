function Paragraph({theme}){
    console.log('theme:',theme)
    return(
        <p className={theme}>
            React Context sẽ cho phép chúng ta có thể tạo data và truyền nó với một provider đến tất cả component trong ứng dụng React mà không cần dùng “prop drilling” .
        </p>
    )
}
export default Paragraph