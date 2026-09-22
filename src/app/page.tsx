import { SafetyLabel } from "@/components/SafetyLabel";
import { TagOutDemo } from "@/components/TagOutDemo";
import styles from "./page.module.css";

const SIGN_IN = "/sign-in";

export default function Home() {
  return (
    <>
      <header className={styles.topbar}>
        <a className={styles.wordmark} href="/">
          Redline
        </a>
        <a className={styles.topbarAction} href={SIGN_IN}>
          Try it on a contract
        </a>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroCopy}>
            <h1 id="hero-title" className={styles.heroTitle}>
              Know what you’re signing.
            </h1>
            <p className={styles.heroLead}>
              Upload a client’s contract before you sign it. Redline ranks the clauses that could hurt you, and every
              flag shows the exact sentence it came from.
            </p>
            <div className={styles.actionRow}>
              <a className={styles.primaryAction} href={SIGN_IN}>
                Try it on a contract
              </a>
              <span className={styles.actionNote}>.pdf or .docx</span>
            </div>
          </div>
          <div className={styles.heroDemo}>
            <TagOutDemo />
          </div>
        </section>

        <section className={`${styles.band} ${styles.paperBand} on-paper`} aria-labelledby="sentence-title">
          <div className={styles.split}>
            <div className={styles.bandIntro}>
              <h2 id="sentence-title" className={styles.bandTitle}>
                Every flag points at a sentence you can read
              </h2>
              <p className={styles.bandText}>
                The sentence under each flag is copied straight from your contract. Redline checks each quote against
                your document before showing the flag, and drops any flag whose sentence it can’t find.
              </p>
            </div>

            <figure className={styles.matchFigure}>
              <div className={styles.matchSide}>
                <figcaption className={styles.caption}>In your contract</figcaption>
                <p className={styles.docExcerpt}>
                  <span className={styles.docHeading}>9. Indemnification</span>{" "}
                  <mark className={styles.docMark}>
                    Contractor shall indemnify, defend and hold harmless Client from any and all claims, losses and
                    expenses, including attorneys’ fees, arising out of or relating to the Services.
                  </mark>
                </p>
              </div>
              <div className={styles.matchJoin} aria-hidden="true">
                <span className={styles.matchRule} />
                <span className={styles.matchStamp}>Matched word for word</span>
                <span className={styles.matchRule} />
              </div>
              <div className={styles.matchSide}>
                <p className={styles.caption}>On the flag</p>
                <blockquote className={styles.flagQuote}>
                  <span className={styles.flagQuoteWord}>Danger</span>
                  <p>
                    “Contractor shall indemnify, defend and hold harmless Client from any and all claims, losses and
                    expenses, including attorneys’ fees, arising out of or relating to the Services.”
                  </p>
                </blockquote>
              </div>
            </figure>
          </div>
        </section>

        <section className={`${styles.band} ${styles.signalsBand}`} aria-labelledby="signals-title">
          <div className={styles.bandIntro}>
            <h2 id="signals-title" className={styles.bandTitle}>
              Flags are ranked by how bad things can get
            </h2>
            <p className={styles.bandText}>
              Redline asks two things about each clause: does the harm have a limit, and can it be undone?
            </p>
          </div>

          <ol className={styles.signals}>
            <li className={`${styles.signal} ${styles.signalDanger}`}>
              <div className={styles.signalMark}>
                <p className={styles.signalWord}>Danger</p>
                <p className={styles.tierName}>Top tier</p>
              </div>
              <div className={styles.signalBody}>
                <h3 className={styles.signalTitle}>No limit, or it can’t be undone</h3>
                <p>
                  Uncapped liability or indemnity. Also giving away work beyond what you were hired to make, and
                  non-compete or exclusivity clauses with no end or boundary.
                </p>
              </div>
            </li>
            <li className={`${styles.signal} ${styles.signalWarning}`}>
              <div className={styles.signalMark}>
                <p className={styles.signalWord}>Warning</p>
                <p className={styles.tierName}>Middle tier</p>
              </div>
              <div className={styles.signalBody}>
                <h3 className={styles.signalTitle}>It has a limit, but it can still hurt</h3>
                <p>
                  Getting paid only when the client gets paid, or a client who can walk away without paying for work
                  you’ve done. Arbitration clauses land here too.
                </p>
              </div>
            </li>
            <li className={`${styles.signal} ${styles.signalCaution}`}>
              <div className={styles.signalMark}>
                <p className={styles.signalWord}>Caution</p>
                <p className={styles.tierName}>Low tier</p>
              </div>
              <div className={styles.signalBody}>
                <h3 className={styles.signalTitle}>It has a limit, and it’s minor</h3>
                <p>A contract that renews itself, or payment pushed back to a set date.</p>
              </div>
            </li>
          </ol>

          <p className={styles.signalsNote}>
            Redline would rather flag a top-tier clause that turns out harmless than miss one. Below that tier, it only
            flags what the wording clearly says.
          </p>
        </section>

        <section className={`${styles.band} ${styles.paperBand} on-paper`} aria-labelledby="missing-title">
          <div className={styles.bandIntro}>
            <h2 id="missing-title" className={styles.bandTitle}>
              What the contract leaves out
            </h2>
            <p className={styles.bandText}>
              A contract can also hurt you by leaving something out. Redline checks every contract for a short list of
              protections and tells you which ones are missing. Those items don’t quote anything, since there’s no
              sentence to point at.
            </p>
          </div>

          <div className={styles.pinnedRow}>
            <div className={styles.paperSheet}>
              <p className={styles.sheetTag}>Made-up contract</p>
              <p className={styles.sheetTitle}>Independent Contractor Agreement, continued</p>
              <p className={styles.sheetPara}>
                <span className={styles.docHeading}>12. Liability</span> Contractor is responsible for any loss or
                damage arising out of the Services.
              </p>
              <p className={styles.sheetPara}>
                <span className={styles.docHeading}>13. Notices</span> Notices under this Agreement must be in writing
                and sent to the addresses in Schedule A.
              </p>
              <p className={styles.sheetPara}>
                <span className={styles.docHeading}>14. Governing law</span> This Agreement is governed by the laws of
                the State of Washington.
              </p>
            </div>

            <div className={styles.pinnedTag}>
              <div className={styles.checklist}>
                <p className={styles.checklistHead}>Missing protections</p>
                <table className={styles.checklistTable}>
                  <caption className={styles.visuallyHidden}>Protections checked in the made-up contract</caption>
                  <tbody>
                    <tr className={styles.isMissing}>
                      <th scope="row">Liability cap</th>
                      <td>Missing</td>
                    </tr>
                    <tr>
                      <th scope="row">Payment terms</th>
                      <td>In the contract</td>
                    </tr>
                    <tr>
                      <th scope="row">Termination notice</th>
                      <td>In the contract</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.band} ${styles.cleanBand}`} aria-labelledby="clean-title">
          <div className={styles.split}>
            <div className={styles.bandIntro}>
              <h2 id="clean-title" className={styles.bandTitle}>
                When nothing’s wrong, you’ll hear that too
              </h2>
              <p className={styles.bandText}>
                When a contract has nothing to flag, Redline says “No risk flags” and gives you the summary and the
                missing-protections list. Nothing gets added to make the result look fuller, and Redline never tells
                you a contract is safe to sign.
              </p>
            </div>
            <div className={styles.cleanStack}>
              <SafetyLabel
                signal="notice"
                size="full"
                hazard="No risk flags"
                consequence="The summary and missing protections follow."
              />
              <div className={`${styles.cleanSummary} on-paper`}>
                <p className={styles.caption}>Summary</p>
                <p className={styles.cleanSummaryText}>
                  A six-month design retainer at a fixed monthly fee. The client covers approved expenses, and either
                  side can end it with 30 days’ written notice.
                </p>
                <p className={styles.sheetNote}>Made-up contract</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.band} ${styles.paperBand} on-paper`} aria-labelledby="terms-title">
          <div className={styles.bandIntro}>
            <h2 id="terms-title" className={styles.bandTitle}>
              Terms you can’t change get the same reading
            </h2>
            <p className={styles.bandText}>
              Terms of service and platform terms aren’t open to negotiation, so Redline labels them that way and
              leaves out counter-offers. You still see what the terms do and which clauses could cost you.
            </p>
          </div>

          <div className={styles.pinnedRow}>
            <div className={styles.paperSheet}>
              <p className={styles.sheetStrip}>These look like take-it-or-leave-it terms</p>
              <p className={styles.sheetTitle}>Platform Terms of Service</p>
              <p className={styles.sheetPara}>
                <span className={styles.docHeading}>17. Disputes</span>{" "}
                <mark className={styles.docMarkWarning}>
                  You and the Company agree to resolve any dispute through binding individual arbitration and waive any
                  right to a jury trial or class action.
                </mark>
              </p>
              <p className={styles.sheetPara}>
                <span className={styles.docHeading}>18. Changes</span> The Company may update these terms at any time
                by posting a revised version.
              </p>
              <p className={styles.sheetNote}>Made-up terms</p>
            </div>

            <div className={styles.pinnedTag}>
              <SafetyLabel
                signal="warning"
                hazard="Disputes go to private arbitration."
                consequence="You can’t take a dispute to court or join a class action."
              />
              <p className={styles.noCounterNote}>No counter-offer. There’s no one to send it to.</p>
            </div>
          </div>
        </section>

        <section className={`${styles.band} ${styles.limitsBand}`} aria-labelledby="limits-title">
          <div className={`${styles.tagFace} on-paper`}>
            <span className={styles.grommet} aria-hidden="true" />
            <h2 id="limits-title" className={styles.tagTitle}>
              What Redline won’t do
            </h2>
            <ul className={styles.limits}>
              <li>Tell you whether to sign. You see what you’d be agreeing to, and the decision is yours.</li>
              <li>Give legal advice or say a clause would hold up in court.</li>
              <li>Read scans or photos. It needs a .pdf or .docx with text you can select.</li>
              <li>Handle leases, job offers, or contracts you’ve already signed.</li>
              <li>
                Send your contract to a model provider that keeps it or trains on it. Redline will only ever route to
                providers that don’t.
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.close} aria-labelledby="close-title">
          <h2 id="close-title" className={styles.closeTitle}>
            Before you sign, read the flags.
          </h2>
          <div className={styles.actionRow}>
            <a className={styles.primaryAction} href={SIGN_IN}>
              Try it on a contract
            </a>
            <span className={styles.actionNote}>.pdf or .docx with text you can select</span>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span className={styles.footerMark}>Redline</span>
        <span>Every contract on this page is made up.</span>
      </footer>
    </>
  );
}
