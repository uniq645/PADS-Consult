document.addEventListener('DOMContentLoaded', function () {
    // Create the container element
    const container = document.createElement('div');
    container.innerHTML = `
    <!-- Chat Widget -->
    <div x-data="{ open: false }" class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <!-- Menu Items -->
        <div x-show="open" x-cloak x-transition:enter="transition ease-out duration-300"
            x-transition:enter-start="opacity-0 translate-y-4 scale-95"
            x-transition:enter-end="opacity-100 translate-y-0 scale-100"
            x-transition:leave="transition ease-in duration-200"
            x-transition:leave-start="opacity-100 translate-y-0 scale-100"
            x-transition:leave-end="opacity-0 translate-y-4 scale-95" class="flex flex-col gap-3">

            <!-- Email -->
            <a href="mailto:padconsults@gmail.com"
                class="w-12 h-12 bg-white text-brand-secondary rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all border border-gray-100 relative group">
                <div
                    class="absolute right-14 bg-white px-3 py-1 rounded-lg shadow-md text-sm font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Email Us</div>
                <i class="ph ph-envelope text-xl"></i>
            </a>

            <!-- Phone -->
            <a href="tel:0245912363"
                class="w-12 h-12 bg-brand-darkBlue text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all relative group">
                <div
                    class="absolute right-14 bg-white px-3 py-1 rounded-lg shadow-md text-sm font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Call Us</div>
                <i class="ph ph-phone text-xl"></i>
            </a>

            <!-- WhatsApp -->
            <a href="https://wa.me/233245912363" target="_blank"
                class="w-12 h-12 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all relative group">
                <div
                    class="absolute right-14 bg-white px-3 py-1 rounded-lg shadow-md text-sm font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    WhatsApp</div>
                <img src="https://cdn.simpleicons.org/whatsapp/white" class="w-6 h-6" alt="WhatsApp">
            </a>
        </div>

        <!-- Main Button -->
        <button @click="open = !open"
            class="bg-brand-lightBlue text-brand-secondary w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all outline-none focus:ring-4 focus:ring-brand-lightBlue/20 z-50"
            aria-label="Contact Us">
            <i class="ph text-2xl transition-transform duration-300"
                :class="open ? 'ph-x rotate-90' : 'ph-chat-circle-dots'"></i>
        </button>
    </div>
    `;

    document.body.appendChild(container);

    // If Alpine is already initialized, we need to tell it to initialize the new dynamic content
    if (window.Alpine) {
        Alpine.initTree(container);
    }
});
