import { Footer, Content, Container } from 'react-bulma-components';

export default function FooterPage () {


    return(
        <Footer mt='6' backgroundColor='white'>
        <Container>
          <Content style={{ textAlign: 'center' }}>
            <p>
              <strong>Anonymous notes</strong> by{' '}
              <a href="https://github.com/FinLoik">INC</a>. 
              The website content is licensed{' '}
              <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                CC BY NC SA 4.0
              </a>
              . <br />
              <span> Illustrations was taken from  <a href='https://icons8.ru/'>icons8.com</a></span>
            </p>
          </Content>
        </Container>
      </Footer>
    )
}