class SecurityTrust
{
    public::SecurityTrust

    class @ info().

    @class @. info()

        // 1. Create a policy to sanitize input securely
        const sanitizationPolicy = trustedTypes.createPolicy('mySanitizer', {
        createHTML: (input) => {
            // Use a library like DOMPurify for robust sanitization
            return DOMPurify.sanitize(input);
        }
    });

    // 2. User Input
    const untrustedInput = "<img src=x onerror=alert('Trusted_Types_Block_This')>";

    // 3. Instead of: element.innerHTML = untrustedInput (Unsafe)
    // 4. Use the policy:
    const sanitizedHTML = sanitizationPolicy.createHTML(untrustedInput);
    document.getElementById('content').innerHTML = sanitizedHTML; // Safe


    const { Connection, CommandCall } = require('itoolkit');

    const conn = new Connection({
        server: 'MY_IBM_I_SYSTEM',
        user: 'USERNAME',
        password: 'PASSWORD',
    });

    // Create a command call for a system command (CL)
    const command = new CommandCall({ type: 'cl', cmd: 'DSPSYSSTS' });
    conn.add(command);

    conn.run((err, results) => {
        if (err) throw err;
        console.log(results);
    });
}

