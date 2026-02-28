import { setDefaultTimeout } from '@cucumber/cucumber';

// Increase default step timeout to 60 seconds to accommodate network/navigation delays
setDefaultTimeout(60 * 1000);
