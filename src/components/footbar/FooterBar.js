import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function FooterBar() {
  return (
    <MDBFooter className='text-center' color='white' style={{ backgroundColor: '#1d1d1d' }}>
      <MDBContainer className='p-4'>

        {/* Social Media Buttons */}
        <section className='mb-4' >
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>
        </section>

        {/* Newsletter Signup */}
        <section className='mb-4'>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        {/* Links Section */}
        <section className=''>
          <MDBRow>
            <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Solutions</h5>
              <ul className='list-unstyled'>
                <li><a href='#!' className='text-white'>Marketing</a></li>
                <li><a href='#!' className='text-white'>Analytics</a></li>
                <li><a href='#!' className='text-white'>Commerce</a></li>
                <li><a href='#!' className='text-white'>Insights</a></li>
              </ul>
            </MDBCol>

            <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Support</h5>
              <ul className='list-unstyled'>
                <li><a href='#!' className='text-white'>Pricing</a></li>
                <li><a href='#!' className='text-white'>Documentation</a></li>
                <li><a href='#!' className='text-white'>Guides</a></li>
                <li><a href='#!' className='text-white'>API Status</a></li>
              </ul>
            </MDBCol>

            <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Company</h5>
              <ul className='list-unstyled'>
                <li><a href='#!' className='text-white'>About</a></li>
                <li><a href='#!' className='text-white'>Blog</a></li>
                <li><a href='#!' className='text-white'>Jobs</a></li>
                <li><a href='#!' className='text-white'>Press</a></li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      {/* Footer Bottom Section */}
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', fontSize: '80%' }}>
        © 2024 Tek Universe. All rights reserved.
      </div>
    </MDBFooter>
  );
}