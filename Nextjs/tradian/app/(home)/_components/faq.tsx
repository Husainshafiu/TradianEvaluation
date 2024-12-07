import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
    return (
        <div className={'container px-[6rem] mt-8 flex flex-col'}>
            <div className={'flex flex-col bg-white p-16 rounded-[2rem] gap-8'}>
                <div className={'flex flex-col gap-3 items-center justify-center'}>
                    <h3 className={'text-3xl font-bold'}>Frequently Asked Questions</h3>
                    <p>Thee are the most commonly asked questions about import and export</p>
                </div>

                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className={'text-lg hover:no-underline'}>What is Tradian?</AccordionTrigger>
                        <AccordionContent>
                            Tradian is a trade facilitation platform designed to simplify and streamline international
                            trade processes in Maldives.
                            It is a centralized digital platform designed to streamline international trade by enabling
                            trade and transport parties to submit standard information and documents through a single
                            entry point.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className={'text-lg hover:no-underline'}>What is the use of Tradian?</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Currently, the trade landscape in the Maldives requires the use of different portals for
                                each stage of the international
                                trade process, leading to significant delays in imports and exports. However, with a
                                National Single Window like our
                                Tradian Portal, businesses and individuals can complete international trade procedures
                                more efficiently and in a shorter
                                period of time.
                            </p>
                            <p className={'mt-6'}>
                                The Maldives trade landscape involves multiple portals for different stages of
                                international trade. With a National
                                Single Window like our Tradian Portal, businesses can streamline services through single
                                submission and integration,
                                completing trade procedures more efficiently.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className={'text-lg hover:no-underline'}>Which parties are required to register on Tradian in
                            Phase 01?</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                During Phase One, the following parties must complete registration on Tradian:
                            </p>
                            <ul className={'list-item list-decimal mt-6'}>
                                <li>Shipping Agents</li>
                                <li>Freight Forwarding Companies</li>
                                <li>Exporters and Importers</li>
                            </ul>
                            <p className={'mt-6'}>
                                These entities are essential participants in the trade process and need registration to
                                access Tradian's services and features.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className={'text-lg hover:no-underline'}>What are the services available in Phase
                            01?</AccordionTrigger>
                        <AccordionContent>
                            <ul className={'list-item list-decimal mt-6'}>
                                <li>Vessel Registration</li>
                                <li>ETA</li>
                                <li>Vessel Declaration</li>
                                <li>Inward and Outward</li>
                                <li>Sea Manifest</li>
                                <li>Electronic Delivery Order (EDO)</li>
                                <li>Licenses, Permits, Certificates and Others (LPCOs)</li>
                                <li>Chemical Import PermitFireworks & Flare Import PermitConstruction Material Import
                                    Permit
                                </li>
                                <li>Pork & Liquor License- ResortsPork & Liquor License- Bonded WarehousePork & Liquor
                                    License- Vessels
                                </li>
                                <li>Pork & Liquor License- EmbassiesDuty Exemption (Ministry of Tourism)</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}