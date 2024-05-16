import Section from "@/components/Section";
import { siteName } from "@/constants";
import Image from "next/image";

const LearnMore = () => {
  return (
    <Section classNames="mx-auto pb-20">
      <div className="pt-10 flex flex-col lg:flex-row items-start justify-between">
        <div className="w-full lg:w-[60%] p-6 rounded-3xl">
          <header>
            <h3 className="uppercase text-brandColorAlt font-semibold">Learn More</h3>
            <h2 className="text-2xl lg:text-3xl capitalize leading-loosed my-2 font-bold">
              Required Documents for Application
            </h2>
            <div className="text-brandText">
              <p className="font-bold my-3">Visitor&apos;s Documents:</p>
              <p className="text-sm">Please provide the following scanned documents with your application:</p>
              <ul className="text-sm my-3 list-decimal ml-7 space-y-3">
                <li>The front and last pages of your passport</li>
                <li>Passport-sized photograph</li>
                <li>If you have previously visited Dubai or the UAE, include the scanned page with the exit stamp</li>
                <li>Confirmed return flight tickets</li>
                <li>Covid-19 insurance (rates apply to those under 50 years old; {siteName} will charge an additional amount for insurance based on age groups under 70, under 75, and under 80).
                </li>
              </ul>
              <p className="text-sm">
                For visa applications in Abu Dhabi or Sharjah, an additional fee of 170 AED applies for the 30-day visa and 190 AED for the 60-day visa.
              </p>
            </div>
            <div className="mt-8 text-brandText">
              <p className="font-bold my-3">Sponsor&apos;s or Referee&apos;s Documents:</p>
              <p className="text-sm">If you have a guarantor in the UAE, please submit the following documents:</p>
              <ul className="text-sm my-3 list-decimal ml-7 space-y-3">
                <li>A copy of the guarantor&apos;s passport and residence visa, each with at least 3 months of validity</li>
                <li>A security cheque of AED 5500 for each application; this cheque will only be used if the visitor abscondsIf you have previously visited Dubai or the UAE, include the scanned page with the exit stamp</li>
                <li>A bank statement from the last month from the same account as the cheque, for verification</li>
              </ul>
              <p className="text-sm mt-5">Documents Required if You Do Not Have a Guarantor in the UAE:</p>
              <ul className="text-sm my-3 list-decimal ml-7 space-y-3">
                <li>Non-family visitors must provide a security deposit of AED 5500, which is fully refundable. This deposit will be returned once you provide a scanned copy of your passport page showing the UAE exit stamp.</li>
                <li>Family visitors are not required to provide a deposit. Instead, they can make airline, tour, or hotel bookings with us at the best-guaranteed prices.</li>
                <li>Certain visitors (except families) must pay a security deposit of AED 5500. This amount is fully refundable and will be reimbursed once you send us a scanned copy of your passport page with the UAE exit stamp. This ensures that you have left the country and are not overstaying.</li>
              </ul>
            </div>
          </header>
        </div>
        <div className="w-full lg:w-[40%]">
          <Image
            width={900}
            height={900}
            src="/home/document.png"
            alt="document 3d image"
          />
        </div>
      </div>
      <span id="faq"></span>
    </Section>
  )
}

export default LearnMore
