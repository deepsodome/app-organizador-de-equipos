import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/De3pContents'>
                <img src="/img/fb.png" alt='Facebook' />
            </a>
            <a href='https://github.com/deepsodome'>
                <img src="/img/github.png" alt='GitHub' />
            </a>
            <a href='https://www.youtube.com/channel/UCa-I6ZZ617H1pWRxUEE1vew'>
                <img src="/img/youtube.png" alt='Youtube' />
            </a>
            <a href='https://tinyurl.com/deepcontnts'>
                <img src="/img/dc.png" alt='DeepContents' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Alura</strong>
    </footer>
}

export default Footer