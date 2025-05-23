import React from 'react'

function PeerReview() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem] py-5  mx-auto md:px-5 px-3">
                <div className="  relative">
                    <section className="flex flex-col gap-5">
                        <section className="flex flex-col gap-4">
                            <div className=' '>
                                <h1 className=" text-[#18025b] text-center merry  font-semibold  lg:text-2xl   text-lg ">
                                    Peer Review Process
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                The International Journal of Quantum Computing and AI upholds the highest standards of academic excellence and research integrity through a rigorous peer-review process, ensuring the publication of high-quality, impactful research in quantum computing and AI.
                            </p>
                        </section>

                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#18025b]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Initial Screening
                            </h1>
                            <p className="text-justify md:text-base text-sm">
                            Upon submission, the editorial team reviews manuscripts for alignment with the journal’s scope and formatting guidelines. Submissions that do not meet basic requirements may be returned for revisions.
                            </p>
                        </section>
                        <section className="flex flex-col gap-2 ">
                            <h1 className="    merry   font-semibold text-[#18025b]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Double-Blind Peer Review
                            </h1>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi  fi-ss-dot-circle text-xs text-[#18025b]   flex items-center"></i>
                                    <p className="">Manuscripts passing the initial screening are sent to at least two independent reviewers for evaluation.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi  fi-ss-dot-circle text-xs text-[#18025b]   flex items-center"></i>
                                    <p className="">The identities of both the authors and reviewers remain anonymous to ensure unbiased assessments.</p>
                                </div>



                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold
text-[#18025b]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Author Revisions
                            </h1>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi  fi-ss-dot-circle text-xs text-[#18025b]   flex items-center"></i>
                                    <p className="">Based on reviewer feedback, authors may be requested to revise their manuscript.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi  fi-ss-dot-circle text-xs text-[#18025b]   flex items-center"></i>
                                    <p className="">A revised version must be submitted within the specified deadline, with a detailed response addressing the reviewers' comments.</p>
                                </div>



                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold
text-[#18025b]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Editorial Decision
                            </h1>
                            <p className="text-justify md:text-base text-sm">
                                After revisions, the editorial board makes the final decision:
                            </p>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi  fi-ss-dot-circle text-xs text-[#18025b]   flex items-center"></i>
                                    <p className="">Accepted: The manuscript is approved for publication.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi  fi-ss-dot-circle text-xs text-[#18025b]   flex items-center"></i>
                                    <p className="">Minor/Major Revisions: The author must make necessary changes before acceptance.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi  fi-ss-dot-circle text-xs text-[#18025b]   flex items-center"></i>
                                    <p className="">Rejected: The manuscript does not meet the journal's standards.</p>
                                </div>


                            </div>
                            <p className="text-justify md:text-base text-sm">
                                The decision is communicated to the author via email.
                            </p>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold
text-[#18025b]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Final Proof & Publication
                            </h1>

                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi  fi-ss-dot-circle text-xs text-[#18025b]   flex items-center"></i>
                                    <p className="">Once accepted, authors receive a final proof for approval before publication.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi  fi-ss-dot-circle text-xs text-[#18025b]   flex items-center"></i>
                                    <p className="">The article is published in the upcoming issue and indexed accordingly.</p>
                                </div>



                            </div>
                        </section>


                    </section>
                </div>
            </section>
        </>
    )
}

export default PeerReview

