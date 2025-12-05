import { PRIMARY_ACCENT } from "@/app/(pages)/profile/page";

export default function MoreSect() {
    return(
        <div className="mt-8 space-y-6 max-w-3xl mx-auto">
            <section className="border-t pt-6">
                <h2 className={`text-lg font-semibold ${PRIMARY_ACCENT}`}>
                    More
                </h2>
                <p className="text-sm text-gray-600">
                    Manage subscription, security, and integrations in future updates.
                </p>
            </section>
        </div>
    )
}