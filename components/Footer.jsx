import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="flex lg:flex-row items-center lg:items-start gap-6">

            <div className=" gap-2 mt-4 lg:mt-2 flex-col">
              <img src={'/logos/logo.png'} alt="Toys and Toys Logo" className="w-28 h-auto" />
              <div className='flex gap-5'>
                <div className='flex'>
                  <span className='ml-1 mr-2'>JO</span>
                  <img src="/logos/jordan.png" alt="Jordan Flag" className="h-[20px] w-[20px] " />
                </div>
                <img src="/logos/lego.png" alt="Jordan Flag" className="h-[20px] w-[20px] " />

              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src="/logos/FooterLogo.png" alt="LEGO Characters" className="w-[400px] h-auto" />
            </div>


          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm text-gray-700 text-left">
            <div>
              <h3 className="font-bold mb-2">About us</h3>
              <ul className="space-y-1">
                <li>About Toys n Toys</li>
                <li>About Lego</li>
                <li>Mission</li>
                <li>Vision</li>
                <li>Careers</li>
                <li>Product Certificate</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Support</h3>
              <ul className="space-y-1">
                <li>Contact Us</li>
                <li>Find Building Instructions</li>
                <li>Deliveries and Returns</li>
                <li>Payment Methods</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Attractions</h3>
              <ul className="space-y-1">
                <li>LEGO House</li>
                <li>LEGOLAND Parks</li>
                <li>LEGOLAND Discovery Centers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">More from us</h3>
              <ul className="space-y-1">
                <li>LEGO Magazine</li>
                <li>LEGO Education</li>
                <li>LEGO Ideas</li>
                <li>LEGO Foundation</li>
                <li>LEGO Braille Bricks</li>
                <li>Student & Offers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t mt-10 pt-6 text-xs text-gray-500 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-4 text-center lg:text-left">
            <span>PRIVACY POLICY</span>
            <span>TERMS OF USE</span>
            <span>COOKIES</span>
            <span>LEGAL NOTICE</span>
            <span>DIGITAL WELLBEING</span>
            <span>ACCESSIBILITY</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="font-semibold">Follow us:</span>
            <span>Instagram</span>
            <span>Facebook</span>
            <span>Youtube</span>
            <span>Twitter</span>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-400">
          ©2025 BricksMedia Studios. All Rights Reserved. LEGO® and the LEGO® logo are trademarks of the LEGO® Group.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
